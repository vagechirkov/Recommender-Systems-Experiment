import Link from 'next/link';
import {nanoid} from 'nanoid'
import Button from '../components/Button';

export default function Home({searchParams,}: {
    searchParams: { [key: string]: string | undefined };
}) {
    let userId = nanoid();
    if (searchParams.userId) userId = searchParams.userId;


    return (

        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <Link href={`/${userId}/learning`}>
                <Button>
                    Learning
                </Button>
            </Link>

            <Link href={`/${userId}/workshop`}>
                <Button>
                    Workshop
                </Button>
            </Link>


        </>
    );


};