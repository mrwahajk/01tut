import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {

    const styles = {
        listStyleType: 'none',
    }
    return(
        <ul style={styles}>
                    {items.map((item) => (
                        <LineItem
                            key={item.id}
                            item={item}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    ))}
        </ul>
    )
}

export default ItemList