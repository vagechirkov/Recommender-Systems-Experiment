import Link from 'next/link';
import {nanoid} from 'nanoid'

type HomeProps = {
    params?: {
        num?: string;
    };
    searchParams?: { [key: string]: string | undefined };
};

export default function Home({params, searchParams}: HomeProps) {
    let userId = nanoid();
    if (searchParams?.userId)
        userId = searchParams.userId;


    return (

        <>
            <Link href={`/${userId}/learning`}>
                <button className="custom-primary-button">
                    Learning
                </button>
            </Link>

            <Link href={`/${userId}/workshop`}>
                <button className="custom-primary-button">
                    Workshop
                </button>
            </Link>


        </>
    );


};