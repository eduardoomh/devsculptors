import { FC, PropsWithChildren } from "react"
import { Fraunces } from "next/font/google"
import styles from './Title.module.css'

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const Title:FC<PropsWithChildren<any>> = ({children}) =>{
    return(
        <h1 className={`${fraunces.className} ${styles.title}`}>
            {children}
        </h1>
    )
} 

export default Title
