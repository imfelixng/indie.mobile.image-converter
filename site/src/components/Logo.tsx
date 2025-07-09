import Image from 'next/image'
import logo from '@/images/logo.webp'
import { MAIN_DATA } from '@/data'

export function LogoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="192"
      height="192"
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="192" height="192" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1124_7" transform="scale(0.00520833)" />
        </pattern>
        <image
          id="image0_1124_7"
          width="192"
          height="192"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAADKklEQVR4Ae3dvYoXVwCH4aOrARWjUcnaaWMr6bRzC22svCRLb8AbSHIf9gEbbdbCSAKKNopfJMav7N7CzsLhP+/zwNS/ad7unJlj3/cMiDo2+wVgJgGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApK0jgLcT//V9+sgYR+fNs8w6Anjxdd72pa0xTh6Zt88i6wgADkgApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAJZ6+W2MrUnbZ46OcdZR7CUEsNSniZdxTu5vC2AJAZAmANIEQJoASBMAaQIgTQCkCYA0AZAmANIEQJoASBMAaQLYZN/2ns+TTqNureOz8ALYZK/3Cng9aXv/k/CXZl2EODwCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaADbY7m9/j91f/5qyfXHn/Lj++9Up24dJABvs87sv4+Pzf6dsf3j+z5TdwyYA0gRAmgBIEwBpAiBNAKQJgDQBkCYA0gRAmgBIEwBpAiBNAAu92X0//nv3Zc748TG2d85Nmf7plx+n7B42ASz08N6T8eqPN1O2r969Mm4+uDZley0EQJoASBMAaQIgTQCkCYA0AZAmANIEQJoASBMAaQIgTQCkCYC0VQTw+P6f07a3b50f27cvTNn++cacuwBrsooAHt1/Om17/zz+rEspLLeKAOCgBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApK0igDvPdqZt/3D2+LRtlltFAKcun5j9CmyoVQQAByUA0gRAmgBIEwBpAiBNAKQJgDQBkCYA0gRAmgBIEwBpAiBNAKQJgDQBkCYA0gRAmgBIEwBpAiBNAKQJgDQBkCYA0gRAmgBIEwBpAiBNAKQJgDQBkCYA0gRAmgBIEwBpAiBNAKT9D0DfO0k7azxhAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center">
      <Image src={logo} alt="Logo" width={40} height={40} className="rounded" />
      <span className="ml-3 font-bold">{MAIN_DATA.app.name}</span>
    </div>
  )
}
