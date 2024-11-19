import { useEffect, useState, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'

function useCountUp(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, startCounting])

  return count
}

export default function Skills() {
  const completedProjects = useCountUp(1000, 2000, false)
  const ongoingProjects = useCountUp(250, 2000, false)
  const happyClients = useCountUp(500, 2000, false)
  const offices = useCountUp(25, 2000, false)

  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Trigger animation when section is in view
  const completedProjectsCount = useCountUp(1000, 2000, isInView)
  const ongoingProjectsCount = useCountUp(250, 2000, isInView)
  const happyClientsCount = useCountUp(500, 2000, isInView)
  const officesCount = useCountUp(25, 2000, isInView)

  return (
    <section ref={sectionRef} className="container mx-auto px-4 pb-10 py-10 md:py-32 md:mt-[-10%] bg-black min-w-screen h-[100%]">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">ABOUT US</h2>
          <p className="text-muted-foreground text-white">
            And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes
            promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference
            connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day
            everything.
          </p>
          <div className="flex gap-4">
            {/* Standard button */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded">LEARN MORE</button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded flex items-center gap-2">
              <FaPlay className="text-xl" /> {/* Play Icon */}
              Watch Video
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">{completedProjectsCount}+</div>
            <div className="text-sm text-muted-foreground text-white">Completed Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">{ongoingProjectsCount}+</div>
            <div className="text-sm text-muted-foreground text-white">On Going Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">{happyClientsCount}+</div>
            <div className="text-sm text-muted-foreground text-white">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">{officesCount}</div>
            <div className="text-sm text-muted-foreground text-white">Offices through our GLOBE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
