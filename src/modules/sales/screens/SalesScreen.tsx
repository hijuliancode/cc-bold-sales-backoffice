import React from 'react'
import Head from 'next/head'
import { useSales } from '@context/index'
import { FilterTypes } from '@core/types'

export const SalesScreen = () => {
  const { getSales, getSalesBy } = useSales()

  const handleClickAllSales = () => {
    console.log(getSales)
  }

  const handleClickSalesDay = () => {
    const list_sales = getSalesBy(FilterTypes.TODAY)
    console.log('getSalesBy(FilterTypes.TODAY)', list_sales)
  }

  const handleClickSalesWeek = () => {
    const list_sales = getSalesBy(FilterTypes.WEEK)
    console.log('getSalesBy(FilterTypes.WEEK)', list_sales)
  }

  const handleClickSalesMonth = () => {
    const list_sales = getSalesBy(FilterTypes.MONTH)
    console.log('getSalesBy(FilterTypes.MONTH)', list_sales)
  }

  return (
    <div className="page page-internal">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1>SALES</h1>

          <button onClick={handleClickAllSales}>getAllSales</button>
          <button onClick={handleClickSalesDay}>getSalesByDay</button>
          <button onClick={handleClickSalesWeek}>getSalesByWeek</button>
          <button onClick={handleClickSalesMonth}>getSalesByMonth</button>
        </div>
      </main>
    </div>
  )
}
