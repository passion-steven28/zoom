import React from 'react'
import { Button } from './ui/button'
import { MoreHorizontal, Settings } from 'lucide-react'

type Props = {}

export default function VideoCompNav({ }: Props) {
    return (
        <div className='w-full max-h-fit flex justify-end items-center gap-4'>
            <Button>
                <Settings />
            </Button>
            <Button>
                <MoreHorizontal />
            </Button>
            <Button>
                leave/end meeting
            </Button>
        </div>
    )
}