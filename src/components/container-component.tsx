import React, { useState, useEffect } from 'react'
import DataConverter from '../utils/data-converter'
import DropDownComponent from './dropdown-component'
import LoadingComponent from './loading-component'

interface Okrs {
  id: string
  title: string
  category: string
  shortDescr: string
  userName: string
  comments: string[]
}

export default function ContainerComponent() {
  const [okrs, setOkrs] = useState<Okrs[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [filteredOkrs, setFilteredOkrs] = useState<Okrs[]>([])

  useEffect(() => {
    const dataConverter = new DataConverter()
    const data = dataConverter.getTransformedData()
    const filtersData = dataConverter.getFilters()
    setOkrs(data)
    setFilteredOkrs(data)
    setFilters(filtersData)
  }, [])

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterSelected = event.target.value
    if (filterSelected !== 'All') {
      const filteredData = okrs.filter((d) => {
        return d.category === filterSelected
      })
      setFilteredOkrs(filteredData)
    } else {
      setFilteredOkrs(okrs)
    }
  }

  const menus = filters.length > 0 ? filters.map((f) => <div key={f}>{f}</div>) : ''

  const rows = filteredOkrs.length > 0
      ? filteredOkrs.map((d) => <DropDownComponent data={d} key={d.id} />)
      : <LoadingComponent />

  return (
    <>
        <div className="navigation-header">
            <div>BLOGS</div>
            {menus}
        </div>
        <div className="okr-container">
        {rows}
        </div>
    </>
  )
}
