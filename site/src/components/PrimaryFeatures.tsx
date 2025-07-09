/* eslint-disable @next/next/no-img-element */
'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import {
  AnimatePresence,
  type MotionProps,
  type Variant,
  type Variants,
  motion,
} from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { PRIMARY_FEATURE_DATA } from '@/data'
import { APP_ICON_MAP } from './AppIcons'

const features = PRIMARY_FEATURE_DATA.features

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, idx) => {
          const FeatureIcon = APP_ICON_MAP[feature.icon]

          return (
            <div
              key={feature.title}
              className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
            >
              {idx === selectedIndex && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gray-800"
                  initial={{ borderRadius: 16 }}
                />
              )}
              <div className="relative z-10 p-8">
                <FeatureIcon className="h-8 w-8" />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  <Tab className="text-left ui-not-focus-visible:outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.title}
                  </Tab>
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, idx) => {
                return selectedIndex === idx ? (
                  <Tab.Panel
                    static
                    key={feature.title + changeCount}
                    className="relative col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                  >
                    <img
                      src={feature.screen}
                      alt="Feature Image"
                      className="absolute top-[-26px]"
                    />
                  </Tab.Panel>
                ) : null
              })}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, idx) => {
          const FeatureIcon = APP_ICON_MAP[feature.icon]
          return (
            <div
              key={idx}
              ref={(ref) => ref && (slideRefs.current[idx] = ref)}
              className="w-full flex-none snap-center px-4 sm:px-6"
            >
              <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CircleBackground
                    color="#13B5C8"
                    className={idx % 2 === 1 ? 'rotate-180' : undefined}
                  />
                </div>
                <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                  <img
                    src={feature.screen}
                    alt="Feature Image"
                    className="absolute top-0"
                  />
                </PhoneFrame>
                <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                  <FeatureIcon className="h-8 w-8" />
                  <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, idx) => (
          <button
            type="button"
            key={idx}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              idx === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => {
              slideRefs.current[idx].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {PRIMARY_FEATURE_DATA.title}
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            {PRIMARY_FEATURE_DATA.description}
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
