'use client'
import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'
import studentImg from '/public/images/Student.jpg'
import { Badge } from './ui/badge'
import { Dot } from 'lucide-react'
import {
    CallControls,
    CallingState,
    PaginatedGridLayout,
    ParticipantView,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
    StreamVideoParticipant,
    useCall,
    useCallStateHooks,
    User,
} from '@stream-io/video-react-sdk';

/* VideoComp.tsx */
const apiKey = 'mmhfdzb5evj2';
const userId = 'Qui-Gon_Jinn';
const callId = 'N4BsRNJp5lWT';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUXVpLUdvbl9KaW5uIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9RdWktR29uX0ppbm4iLCJpYXQiOjE3MTM2MzIyNTQsImV4cCI6MTcxNDIzNzA1OX0.MpN1B2LiDwnIa0KxzVgrTmwtvirR4q1oFZxX6uP3ds8';
const user: User = { id: userId };

const client = new StreamVideoClient({
    apiKey,
    token,
    user,
});
const call = client.call('default', callId)
call.join({ create: true })


type Props = {}


export default function VideoComp({ }: Props) {
    return (
        <Card className='w-full h-full max-w-fit max-h-screen relative shadow-md bg-purple-700 rounded-md'>
            <StreamVideo client={client}>
                <StreamCall call={call}>
                    <StreamTheme className='relative'>
                        <SpeakerLayout
                        participantsBarPosition={'left'}
                        />
                        <CallControls />
                    </StreamTheme>
                    {/* <MyUiLayout /> */}
                </StreamCall>
            </StreamVideo>
            <Badge className='absolute left-2 top-2'>
                <h1 className='text-md text-red-600 font-bold'>live</h1><Dot color='red' />
            </Badge>
        </Card >
    )
};
