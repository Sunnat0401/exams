import Image from 'next/image'
import styles from './info.module.css'
import { infoGroup, informationImage } from '../../../public'
const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.info_container}>
                <Image className={styles.info_images} src={informationImage} alt='informationImage' />
                <div className={styles.info_wrapper}>
                    <div className={styles.info_left}>
                        <h3 className={styles.info_title}>
                            Turkiya
                        </h3>
                        <h4 className={styles.info_subtitle}>
                            Istanbul: Asrlar Kesisgan Abadiy Shahar
                        </h4>
                        <p className={styles.info_paragraph}>
                            Istanbulga xush kelibsiz – Sharq va G&#39;arb kesisadigan, sehr va tarixiy
                            atmosfera yaratgan shahar.Siz Sultonahmetning jozibali dunyosiga
                            sho&#39;ng&#39;ishingiz, u yerda tor ko&#39;chalar sizni buyuk Ko&#39;k masjid va Aya Sofiyaga
                            olib boradi
                        </p>
                        <p className={styles.info_text}>
                            Sultonahmet bo&#39;ylab sayohat sizni Vizantiya va Usmoniy
                            imperiyasining uzoq davrlariga olib boradi.  Shahar ramzi bo&#39;lgan Topqapi
                            saroyi, Usmoniy sultonlarining rezidensiyasi, sizni boylik va haremning
                            intrigalariga cho&#39;mdiradi.
                        </p>
                        <p className={styles.info_subtext}>
                            Mashhur Katta Bozor bo&#39;ylab yuring, bu yerda siz noyob suvenirlar, ziravorlar
                            va antikvar buyumlarni topasiz. Bosfor bo&#39;yidagi ajoyib manzaralardan
                            bahramand bo&#39;ling va Istanbulning ruhini his eting. Turni Dolmabahche
                            saroyi, Usmoniy davrining boylik va nafislik ramzi, bilan yakunlang
                        </p>
                    </div>
                    <Image className={styles.info_group} src={infoGroup} alt='image'/>
                </div>
            </div>
        </div>
    )
}

export default Info
