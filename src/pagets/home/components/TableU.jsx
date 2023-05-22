function TableU() {

    return (
        <>
            <table className="striped highlight">
                <tbody>
                    <tr>
                        <td className='bold-text'>Вік</td>
                        <td>57</td>

                    </tr>
                    <tr>
                        <td className='bold-text'>Країна</td>
                        <td>Україна</td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Адреса</td>
                        <td>місто Львів</td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Е-mail</td>
                        <td><a style={{ color: 'tomato' }} href="mailto:krzheminsky@ukr.net">
                            krzheminsky@ukr.net</a></td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Телефон</td>
                        <td>+380 669 384 743</td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Фріланс</td>
                        <td>Доступний</td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}

export { TableU }