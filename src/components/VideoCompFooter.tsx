import React from 'react'
import { Button } from './ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Mic, ScreenShare, Share } from 'lucide-react'


type Props = {}
type Option = {
    name: string,
    icon: React.ReactNode,
}

const options: Option[] = [
    {
        name: 'mic',
        icon: <Mic />,
    },
    {
        name: 'rec',
        icon: <Mic />,
    },
    {
        name: 'screen',
        icon: <ScreenShare />,

    },
    {
        name: 'share',
        icon: <Share />,
    },
]

export default function VideoCompFooter({ }: Props) {
    return (
        <div className='flex items-center justify-center gap-4'>
            {options.map((option) => (
                <TooltipProvider key={option.name}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">
                                {option.icon}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{option.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </div>
    )
}
