import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'
import studentImg from '/public/images/Student.jpg'
import { Badge } from './ui/badge'
import { Dot } from 'lucide-react'

/* VideoComp.tsx */

type Props = {}

const participants = [
    {
        name: 'jane',
        image: studentImg,
    },
    {
        name: 'john',
        image: studentImg,
    },
    {
        name: 'doe',
        image: studentImg,
    },
]

/* VideoComp.tsx */

export default function VideoComp({ }: Props) {
    return (
        <Card className='w-full h-full relative shadow-md bg-purple-700 rounded-md'>
            <Badge className='absolute left-2 top-2'>
                <h1 className='text-md text-red-600 font-bold'>live</h1><Dot color='red' />
            </Badge>
            <CardContent className='absolute top-0 right-10 w-fit h-full flex flex-col items-center justify-center gap-4 p-0'>
                {participants.map((participant) => (
                    <Card className='relative overflow-hidden'
                        key={participant.name}
                    >
                        <Image
                            src={studentImg}
                            alt='Student'
                            width={100}
                            height={100}
                            className='object-cover'
                        />
                        <CardTitle className='p-1 text-center text-sm'>
                            {participant.name}
                        </CardTitle>
                    </Card>
                ))}
            </CardContent >
        </Card >
    )
}