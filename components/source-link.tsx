import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github } from 'lucide-react'

type Props = {}

const SourceLink = (props: Props) => {
  return (
    <Button asChild size={'icon'} variant={'outline'}>
        <Link href={'https://github.com/Kolli-Sai'} target='_blank'>
            <Github  />
        </Link>
    </Button>
  )
}

export default SourceLink