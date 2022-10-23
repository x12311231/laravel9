export default function Table () {
    const data = [
        {
            id: 1,
            song: 'The Sliding Mr. Bones (Next Stop, Pottersville)',
            artist: 'Malcolm Lockyer',
            year: '1961'},
        {
            id: 2,
            song: 'Witchy Woman',
            artist: 'The Eagles',
            year: '1972'}
    ];
    return (
        <table className="shadow-sm rounded-md table-fixed bg-white w-full divide-x divide-y divide-solid">
            <thead>
            <tr className="text-left">
                <th className="py-2 px-2">Song</th>
                <th>Artist</th>
                <th>Year</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-solid">
            {
                data.map((e) =>
                    <tr className="py-6 px-6" key={e.id}>
                        <td className="py-2 px-2">{e.song}</td>
                        <td>{e.artist}</td>
                        <td>{e.year}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}
