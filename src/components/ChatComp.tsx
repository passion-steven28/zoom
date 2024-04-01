import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Textarea } from './ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Separator } from '@radix-ui/react-separator'

type Props = {}

const users = [
    {
        name: 'passion',
        role: 'sender',
        message: 'hello'
    },
    {
        name: 'steven',
        role: 'receiver',
        message: 'hello,, how are you'
    }
]

export default function ChatComp({ }: Props) {
    return (
        <Card className='h-full w-full flex flex-col justify-between gap-2'>
            <CardHeader className="flex flex-row items-center justify-start gap-4 space-y-0 border-b border-muted-background">
                <Button variant={"outline"}>chat</Button>
                <Button variant={"outline"}>attendee</Button>
            </CardHeader>

            <CardContent className='flex flex-col justify-start h-full overflow-y-auto'>
                {users.map((user) => {
                    return user.role === "sender" ? (
                        <div className='flex flex-row-reverse items-center justify-start gap-4 p-2'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Card>
                                <CardContent className="p-2">
                                    {user.message}
                                </CardContent>
                                <CardFooter className="p-2 text-xs text-right text-muted-foreground">
                                    {user.name}
                                </CardFooter>
                            </Card>
                        </div>
                    ) : (
                        <div className='flex flex-row items-center justify-start gap-4 p-2'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Card>
                                <CardContent className="p-2">
                                    {user.message}
                                </CardContent>
                                <CardFooter className="p-2 text-xs text-right text-muted-foreground">
                                    {user.name}
                                </CardFooter>
                            </Card>
                        </div>
                    );
                })}
            </CardContent>

            <CardFooter>
                <Textarea
                placeholder='Type your message here...'
                />
            </CardFooter>
        </Card>
    );
}
