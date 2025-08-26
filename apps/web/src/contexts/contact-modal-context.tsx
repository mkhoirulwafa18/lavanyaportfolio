'use client'
import React, { createContext, useContext, useState, type ReactNode } from "react";

interface ContactModalContextType {
    isModalOpen: boolean;
    toggleModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen((open) => !open);

    return (
        <ContactModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const context = useContext(ContactModalContext);
    if (!context) {
        throw new Error("useContactModal must be used within a ContactModalProvider");
    }
    return context;
}