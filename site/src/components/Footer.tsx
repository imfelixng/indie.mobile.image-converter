import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { LogoIcon } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import { COMMON_DATA } from '@/data'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-8 pt-8 md:pt-6">
          <p className="text-sm text-gray-500">
            &copy; Copyright {new Date().getFullYear()}{' '}
            <Link
              href={COMMON_DATA.ownerUrl}
              target="_blank"
              className="text-cyan-500"
            >
              {COMMON_DATA.ownerName}
            </Link>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
