import { YMaps, Map } from '@pbe/react-yandex-maps'


export const Mapy = () => {
    return (
        <YMaps >
            <Map defaultState={{ center: [41.311081, 69.240562], zoom: 12 }}
                width={1300}
                height={700}
            />
        </YMaps>
    );
}






