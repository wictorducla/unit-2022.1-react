const ListItem = ({ title, status }) => {
    return (
        <li>
            <p>{title}</p>
        <span>
            { status ? "Completed" : "Ongoing" }
        </span>
        </li>
    )
}

export default ListItem