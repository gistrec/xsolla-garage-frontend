import React from 'react'
import { GoogleLogin } from 'react-google-login'
import styles from './SignInStyles.module.css'

const clientId = '594011049433-k65do25q3alcdrpe2t8f2uoob7stqhpl.apps.googleusercontent.com'

const SignIn = props => {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj)
        props.signIn(res.profileObj.givenName, res.profileObj.imageUrl)
    }
    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res)
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.logoAndTitle}>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5 67C52.0015 67 67 52.0015 67 33.5C67 14.9985 52.0015 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 52.0015 14.9985 67 33.5 67Z" fill="#0073F7" />
                        <path d="M33.5 53.2329C44.3982 53.2329 53.2329 44.3982 53.2329 33.5C53.2329 22.6018 44.3982 13.7671 33.5 13.7671C22.6018 13.7671 13.7671 22.6018 13.7671 33.5C13.7671 44.3982 22.6018 53.2329 33.5 53.2329Z" stroke="white" strokeWidth="2" />
                        <path d="M52.6295 20.1676C53.4484 19.3185 53.4316 17.958 52.5922 17.13C51.7546 16.3041 50.4153 16.3197 49.597 17.1641L31.4377 34.0088L26.7039 29.9841C25.9645 29.0759 24.639 28.939 23.7333 29.6799C22.8218 30.4255 22.68 31.7783 23.4179 32.7008L29.6593 40.505C30.4584 41.5042 31.9399 41.5736 32.8267 40.6539L52.6295 20.1676Z" fill="white" stroke="#0073F7" strokeWidth="2" />
                    </svg>
                    <h1>THE BEST PLANNER EVER</h1>
                </div>

                <GoogleLogin
                    clientId={clientId}
                    buttonText="Войти через Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            <svg className={styles.abstractShapes} position="fixed" top="0" bottom="0" left="0" right="0" viewBox="0 0 1440 933" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 0V482C1380.04 384.135 1389.53 342.79 1388.03 309.82C1386.83 283.443 1373.54 263.591 1367.05 256.962C1347.73 246.495 1303.89 223.154 1283.1 213.524C1257.12 201.488 1225.14 225.561 1169.17 241.262C1113.21 256.962 1023.26 256.962 969.299 225.561C915.333 194.161 875.359 160.667 808.401 82.6884C754.835 20.3058 682.481 1.57003 653 0H1440Z" fill="#0073F7" fillOpacity="0.5" />
                <path d="M1440 0H764C845.335 25.4253 826.483 66.2016 941.214 170.301C1055.95 274.401 1217 215.395 1262.25 219.713C1307.49 224.03 1375.36 242.26 1387.21 314.698C1396.69 372.648 1426.35 405.045 1440 414V0Z" fill="#0073F7" fillOpacity="0.6" />
                <path d="M1440 0H790C882.571 8.72313 909.092 83.5584 986.151 145.539C1063.21 207.519 1149.28 227.72 1237.34 223.128C1325.41 218.537 1356.44 252.053 1383.46 309.442C1405.07 355.353 1430.16 384.277 1440 393V0Z" fill="#0073F7" />
                <path d="M0 910V78C30.1091 89.5765 114.533 243.091 109.81 488.212C106.031 684.308 35.0289 851.111 0 910Z" fill="#EE00AB" fillOpacity="0.6" />
                <path d="M123.686 551.023C110.437 312.404 35.7085 180.916 0 145V933C46.7488 905.099 136.934 789.643 123.686 551.023Z" fill="#EE00AB" fillOpacity="0.4" />
            </svg>
        </div>
    )
}

export default SignIn
