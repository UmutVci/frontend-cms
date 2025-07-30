import React, { createContext, useContext, useState, useEffect } from "react";
import FeedbackService from "../services/FeedbackService";

const FeedbackContext = createContext({
    feedbackCount: 0,
    refreshCount: () => {},
});

export function FeedbackProvider({ children }) {
    const [feedbackCount, setFeedbackCount] = useState(0);

    const refreshCount = async () => {
        try {
            const count = await FeedbackService.getCount();
            setFeedbackCount(count);
        } catch (err) {
            console.error("Failed to refresh feedback count", err);
        }
    };

    useEffect(() => {
        refreshCount();
    }, []);

    return (
        <FeedbackContext.Provider value={{ feedbackCount, refreshCount }}>
            {children}
        </FeedbackContext.Provider>
    );
}

export const useFeedbackCount = () => useContext(FeedbackContext);
