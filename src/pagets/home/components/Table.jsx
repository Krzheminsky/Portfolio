function Table() {

    return (
        <>
            <table className="striped highlight">
                <tbody>
                    <tr>
                        <td className='bold-text'>Age</td>
                        <td>57</td>

                    </tr>
                    <tr>
                        <td className='bold-text'>Residence</td>
                        <td>UA</td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Address</td>
                        <td>Lviv, UA</td>
                    </tr>
                    <tr>
                        <td className='bold-text'>e-mail</td>
                        <td><a style={{ color: 'tomato' }} href="mailto:krzheminsky@ukr.net">
                            krzheminsky@ukr.net</a></td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Phone</td>
                        <td>+380 669 384 743</td>
                    </tr>
                    <tr>
                        <td className='bold-text'>Freelance</td>
                        <td>Available</td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}

export { Table }