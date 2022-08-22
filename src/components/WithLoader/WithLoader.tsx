import {Loader} from "../Loader/Loader";

export const WithLoader = ({children = '',loading = 'false'}) => {
    return (
        <div>
            {children}
            {loading && <Loader />}
        </div>
    )
}