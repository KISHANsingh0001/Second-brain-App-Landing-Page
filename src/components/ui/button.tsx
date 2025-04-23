"use client";
export const runtime = "edge";
import { GlowEffect } from '@/components/ui/glow-effect';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/config';
export default function GlowEffectButton() {
  return (
    <div className='relative'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      <Link href={SIGNUP_URL}>
        <button className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-3.5 py-2.5 text-lg text-zinc-50 outline outline-1 outline-[#fff2f21f]'>
          Get Started<ArrowRight className='h4 w-4' />
        </button>
      </Link>
    </div>
  );
}

