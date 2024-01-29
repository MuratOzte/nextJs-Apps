'use client';

import { useFormStatus } from 'react-dom';

const MealsShareSubmitBtn = () => {
    const { isPending } = useFormStatus();

    console.log(isPending);

    return (
        <button type="submit" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
        </button>
    );
};

export default MealsShareSubmitBtn;
