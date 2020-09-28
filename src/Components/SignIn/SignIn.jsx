import React from 'react'
import styles from './SignInStyles.module.css'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
    console.log(response);
}

const SignIn = () => {
    return (
        <div>
            <div className={styles.abstractShapes}>
                <div className={styles.logoContainer}>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5 67C52.0015 67 67 52.0015 67 33.5C67 14.9985 52.0015 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 52.0015 14.9985 67 33.5 67Z" fill="#0073F7" />
                        <path d="M33.5 53.2329C44.3982 53.2329 53.2329 44.3982 53.2329 33.5C53.2329 22.6018 44.3982 13.7671 33.5 13.7671C22.6018 13.7671 13.7671 22.6018 13.7671 33.5C13.7671 44.3982 22.6018 53.2329 33.5 53.2329Z" stroke="white" stroke-width="2" />
                        <path d="M52.6295 20.1676C53.4484 19.3185 53.4316 17.958 52.5922 17.13C51.7546 16.3041 50.4153 16.3197 49.597 17.1641L31.4377 34.0088L26.7039 29.9841C25.9645 29.0759 24.639 28.939 23.7333 29.6799C22.8218 30.4255 22.68 31.7783 23.4179 32.7008L29.6593 40.505C30.4584 41.5042 31.9399 41.5736 32.8267 40.6539L52.6295 20.1676Z" fill="white" stroke="#0073F7" stroke-width="2" />
                    </svg>
                    <h1>THE BEST PLANNER EVER</h1>
                </div>
                <GoogleLogin
                    clientId="574484498021-l0tqmv2jfa9t9akmsruutva6sd0824a6.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className={styles.googleBtn} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="53" fill="white" />
                                <path d="M15.427 29.5251L14.4176 33.2935L10.728 33.3715C9.62543 31.3264 9 28.9865 9 26.5C9 24.0955 9.58476 21.8281 10.6213 19.8316L13.9068 20.4338L15.3457 23.6988C15.0445 24.5768 14.8804 25.5193 14.8804 26.5C14.8805 27.5644 15.0733 28.5842 15.427 29.5251Z" fill="#FBBB00" />
                                <path d="M37.7466 23.7912C37.9132 24.6684 38 25.5742 38 26.5C38 27.5381 37.8909 28.5507 37.6829 29.5275C36.9771 32.8514 35.1327 35.7537 32.5777 37.8076L32.5769 37.8068L28.4396 37.5957L27.8541 33.9404C29.5494 32.9462 30.8744 31.3902 31.5723 29.5275H23.8188V23.7912H31.6854H37.7466Z" fill="#518EF8" />
                                <path d="M32.5768 37.8068L32.5776 37.8076C30.0927 39.8049 26.9362 41 23.5 41C17.978 41 13.1771 37.9136 10.728 33.3716L15.427 29.5251C16.6515 32.7932 19.8041 35.1196 23.5 35.1196C25.0886 35.1196 26.5769 34.6901 27.854 33.9404L32.5768 37.8068Z" fill="#28B446" />
                                <path d="M32.7553 15.3382L28.0579 19.1838C26.7362 18.3577 25.1738 17.8804 23.5 17.8804C19.7204 17.8804 16.5089 20.3135 15.3457 23.6988L10.6221 19.8316H10.6213C13.0345 15.1788 17.896 12 23.5 12C27.0182 12 30.2441 13.2532 32.7553 15.3382Z" fill="#F14336" />
                            </svg>
                            <div><p>Sign in with Google</p></div>
                        </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <svg position="fixed" top="0" bottom="0" left="0" right="0" viewBox="0 0 1440 996" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 996V76C30.1091 88.801 114.533 258.553 109.81 529.599C106.031 746.437 35.0289 930.882 0 996Z" fill="#747E8A" fill-opacity="0.6" />
                    <path d="M1440 163V733C1395.62 690 1333.28 591 1303.85 468C1274.43 345 1310.84 264.5 1341.76 222.5C1366.49 188.9 1417.56 168.833 1440 163Z" fill="#EB002F" fill-opacity="0.5" />
                    <path d="M1440 0H809C890 14 912 122.5 920 148C928 173.5 953.5 259 1036.5 278.5C1119.5 298 1183 278.5 1234.5 259C1286 239.5 1301.5 235 1309.5 235C1317.5 235 1378.5 217.5 1396.5 310.5C1410.9 384.9 1431.5 417.833 1440 425V0Z" fill="#0073F7" fill-opacity="0.6" />
                </svg>
            </div>
        </div>
    )
}

export default SignIn