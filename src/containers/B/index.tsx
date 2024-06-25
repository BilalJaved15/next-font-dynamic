import { Mulish } from 'next/font/google'

const mulish = Mulish({
    subsets: ['latin']
})

const B = () => {
  return (
    <div className={mulish.className}>B</div>
  )
}

export default B