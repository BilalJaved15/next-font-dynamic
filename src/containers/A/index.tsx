import { Nunito_Sans } from 'next/font/google'
const nunitoSans = Nunito_Sans({
    subsets: ['latin']
})

const A = () => {
  return (
    <div className={nunitoSans.className}>A</div>
  )
}

export default A