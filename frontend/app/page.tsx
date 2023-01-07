import Link from 'next/link';
import {nanoid} from 'nanoid'

export default function Home() {
    const userId = nanoid();

    return (

        <>
            <Link href={`/${userId}/learning`}>
                <button>
                    Learning
                </button>
            </Link>

            <Link href={`/${userId}/workshop`}>
                <button>
                    Workshop
                </button>
            </Link>


        </>
    );


};