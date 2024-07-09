import Image from 'next/image'
import { Trans } from 'next-i18next'

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="my-12">
      <div className="mx-auto w-1/3">
        <Image src="/images/fabulous-rip-2.png" alt="404" width={912} height={912} priority />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          El servidor llegó a su límite de cuota diaria. Tendrás que esperar hasta las 21hs UTC-3 para su reinicio o ir al servidor de respaldo mediante <a className="text-blue-600 hover:text-blue-700 hover:underline" href="https://series-am2.az-animex.com/es/" target="_blank" rel="noopener noreferrer">este enlace</a>.
        </div>
      </div>
    </div>
  )
}

export default FourOhFour
