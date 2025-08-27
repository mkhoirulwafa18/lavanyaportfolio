"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { serviceOptions, budgetOptions } from "@/lib/constants";
import { useContactModal } from "@/contexts/contact-modal-context";
export interface ContactFormRef {
    submit: () => void;
}

const ContactForm = forwardRef<ContactFormRef>((_, ref) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [clientData, setClientData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [services, setServices] = useState<string[]>([]);
    const [budget, setBudget] = useState<string>("");
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        company: false,
        message: false,
        services: false,
        budget: false,
    });
    const { toggleModal } = useContactModal();

    useImperativeHandle(ref, () => ({
        submit: () => {
            if (formRef.current) {
                formRef.current.requestSubmit();
            }
        },
    }));

    // Handle service selection (multiselect)
    const toggleService = (service: string) => {
        if (services.includes(service)) {
            setServices(services.filter((item) => item !== service));
        } else {
            setServices([...services, service]);
        }
        setErrors({ ...errors, services: false });
    };

    // Handle budget selection (single select)
    const selectBudget = (option: string) => {
        setBudget(option);
        setErrors({ ...errors, budget: false });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset all errors
        const newErrors = {
            name: false,
            email: false,
            company: false,
            message: false,
            services: false,
            budget: false,
            referrals: false,
        };

        // Validate each field
        if (clientData.name.trim() === "") {
            newErrors.name = true;
        }
        if (clientData.email.trim() === "") {
            newErrors.email = true;
        }
        if (clientData.company.trim() === "") {
            newErrors.company = true;
        }
        if (clientData.message.trim() === "") {
            newErrors.message = true;
        }
        if (services.length === 0) {
            newErrors.services = true;
        }
        if (budget === "") {
            newErrors.budget = true;
        }

        setErrors(newErrors);

        // If there are any errors, don't submit
        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        // Add your form submission logic here
        console.log("Form submitted: ");
        console.log(clientData);
        console.log(services);
        console.log(budget);

        // Send email
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: clientData.name,
                email: clientData.email,
                company: clientData.company,
                message: clientData.message,
                services,
                budget,
            }),
        });

        if (response.ok) {
            console.log("Email sent successfully");
            setClientData({
                name: "",
                email: "",
                company: "",
                message: "",
            });
            setServices([]);
            setBudget("");
            setErrors({
                name: false,
                email: false,
                company: false,
                message: false,
                services: false,
                budget: false,
            });
            toggleModal();
        } else {
            console.error("Failed to send email");
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* <div className="flex flex-col"> */}
            <h2 className="text-[clamp(48px,7vw,164px)] font-semibold tracking-tight mb-[clamp(32px,3vw,48px)] leading-[0.8]">
                <span className="text-background">Get in</span>{" "}
                <span className="text-[#003a27]">touch</span>
            </h2>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 h-full"
            >
                <div className="flex flex-col lg:flex-row gap-3 w-full">
                    {/* Full name */}
                    <div
                        className={`flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-[#BACDB0] border-3 transition-colors duration-300 align-center focus-within:border-background
              ${errors.name ? "border-[#d40101]" : "border-background/0"}
              `}
                    >
                        <label
                            htmlFor="name"
                            className="text-background font-semibold text-[clamp(20px,1.5vw,32px)]"
                        >
                            Full name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={clientData.name}
                            onChange={(e) => {
                                setClientData({ ...clientData, name: e.target.value });
                                setErrors({ ...errors, name: false });
                            }}
                            placeholder="Maisha"
                            className="text-background font-semibold placeholder:text-background/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div
                        className={`flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-[#BACDB0] border-3 transition-colors duration-300 focus-within:border-background
              ${errors.email ? "border-[#d40101]" : "border-background/0"}
              `}
                    >
                        <label
                            htmlFor="email"
                            className="text-background font-semibold text-[clamp(20px,1.5vw,32px)]"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={clientData.email}
                            onChange={(e) => {
                                setClientData({ ...clientData, email: e.target.value });
                                setErrors({ ...errors, email: false });
                            }}
                            placeholder="lavanyayasmeen@gmail.com"
                            className="text-background font-semibold placeholder:text-background/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none"
                        />
                    </div>

                    {/* Company */}
                    <div
                        className={`flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-[#BACDB0] border-3 transition-colors duration-300 focus-within:border-background
              ${errors.company ? "border-[#d40101]" : "border-background/0"}
              `}
                    >
                        <label
                            htmlFor="company"
                            className="text-background font-semibold text-[clamp(20px,1.5vw,32px)]"
                        >
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={clientData.company}
                            onChange={(e) => {
                                setClientData({ ...clientData, company: e.target.value });
                                setErrors({ ...errors, company: false });
                            }}
                            placeholder="Lava Agency"
                            className="text-background font-semibold placeholder:text-background/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 w-full h-full">
                    {/* Message */}
                    <div
                        className={`flex flex-col w-full lg:w-1/3 px-6 pt-12 lg:pt-16 pb-4 h-72 lg:h-full rounded-xl lg:rounded-2xl bg-[#BACDB0] border-3 transition-colors duration-300 focus-within:border-background
              ${errors.message ? "border-[#d40101]" : "border-background/0"}
              `}
                    >
                        <label
                            htmlFor="message"
                            className="text-background font-semibold text-[clamp(20px,1.5vw,32px)] mb-2"
                        >
                            Project details
                        </label>
                        <textarea
                            name="message"
                            value={clientData.message}
                            onChange={(e) => {
                                setClientData({ ...clientData, message: e.target.value });
                                setErrors({ ...errors, message: false });
                            }}
                            placeholder="Tell me your goals"
                            className="text-background font-semibold placeholder:text-background/40 text-[clamp(20px,1.5vw,32px)] leading-tight focus:outline-none h-full resize-none"
                        ></textarea>
                    </div>

                    {/* Services */}
                    <div
                        className={`flex flex-col w-full lg:w-1/3 px-6 pt-12 lg:pt-16 pb-6 lg:h-full rounded-xl lg:rounded-2xl bg-[#BACDB0] border-3 transition-colors duration-300 focus-within:border-background
              ${errors.services ? "border-[#d40101]" : "border-background/0"}
              `}
                    >
                        <label
                            htmlFor="services"
                            className="text-background font-semibold text-[clamp(20px,1.5vw,32px)] mb-2 lg:mb-4 2xl:mb-6"
                        >
                            What can I do for you?
                        </label>
                        <ul className="flex flex-wrap gap-2 w-full">
                            {serviceOptions.map((service) => (
                                <li
                                    key={service}
                                    onClick={() => toggleService(service)}
                                    className={`px-3.5 2xl:px-5 py-1.5 2xl:py-2 text-[clamp(18px,1.2vw,24px)] font-semibold rounded-full border-2 border-background cursor-pointer transition-colors duration-300 ease-in-out
                    ${services.includes(service)
                                            ? "text-[#BACDB0] bg-background"
                                            : "text-background"
                                        }`}
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Budget */}
                    <div
                        className={`flex flex-col w-full lg:w-1/3 px-6 pt-12 lg:pt-16 pb-6 h-auto lg:h-full rounded-xl lg:rounded-2xl bg-[#BACDB0] border-3 transition-colors duration-300 focus-within:border-background
              ${errors.budget ? "border-[#d40101]" : "border-background/0"}
              `}
                    >
                        <label
                            htmlFor="budget"
                            className="text-background font-semibold text-[clamp(20px,1.5vw,32px)] mb-2 lg:mb-4 2xl:mb-6"
                        >
                            Do you have a budget range?
                        </label>
                        <ul className="flex flex-wrap gap-2 w-full">
                            {budgetOptions.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => selectBudget(option)}
                                    className={`px-3.5 2xl:px-5 py-1.5 2xl:py-2 text-[clamp(18px,1.2vw,24px)] font-semibold rounded-full border-2 border-background cursor-pointer transition-colors duration-300 ease-in-out
                    ${budget === option
                                            ? "text-[#BACDB0] bg-background"
                                            : "text-background"
                                        }`}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
