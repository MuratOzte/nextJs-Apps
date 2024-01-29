'use server';
import { saveMeal } from './meals.js';
import { redirect } from 'next/navigation';

export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creatorEmail: formData.get('email'),
    };

    const isInvalidText = (text) => {
        return text.trim === '' || !text;
    };

    for (const [key, value] of Object.entries(meal)) {
        if (isInvalidText(value)) {
            throw new Error(`Invalid ${key}`);
        }
    }

    await saveMeal(meal);
    redirect('/');
};
