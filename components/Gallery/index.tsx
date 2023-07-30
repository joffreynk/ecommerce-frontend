import { Tab } from '@headlessui/react'

import { Image as ImageProp } from '@/types'
import GalleryTab from './GalleryTab'

const Gallery = ({images}: {images: ImageProp[]}) => {
  return (
    <Tab.Group as='div' className="flex flex-col-reverse">
        <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
            <Tab.List className="grid grid-cols-4 gap-6">
                {
                    images.map(image =>(<GalleryTab key={image.id} image={image} />))
                }
            </Tab.List>
        </div>
    </Tab.Group>
  )
}

export default Gallery