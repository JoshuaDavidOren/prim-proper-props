function DinnerSupplies (props) {
    return (
        <>
        <div>
        Spoons: {props.list.length * 2}
      </div>
      <div>
        Forks: {props.list.length * 2}
      </div>
      <div>
        Knives: {props.list.length * 2}
      </div>
      </>
    )
}

export default DinnerSupplies;