import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/meals';

const AllMeals = async () => {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;
};

const Meals = async () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals Created{' '}
                    <span className={classes.highlight}>By You</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself! It is easy
                    and fun !
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading</p>}>
                    <AllMeals />
                </Suspense>
            </main>
        </>
    );
};

export default Meals;
