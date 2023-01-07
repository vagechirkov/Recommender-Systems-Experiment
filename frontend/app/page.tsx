import Link from 'next/link';
import {nanoid} from 'nanoid'

export default function Home({searchParams,}: {
    searchParams: { [key: string]: string | undefined };
}) {
    let userId = nanoid();
    if (searchParams.userId) userId = searchParams.userId;


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