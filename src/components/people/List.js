function List(props){
    
    return(
        <div>
            <ul class="list-group">
                <li class="list-group-item bg-dark text-warning my-1">
                    {props.people}
                </li>
            </ul>
        </div>
    );
}

export default List;