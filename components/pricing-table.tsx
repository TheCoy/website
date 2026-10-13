import { pricing } from "@/lib/site"

const cell = "py-1 align-baseline max-md:block md:py-8 md:pr-8"
const heading =
  "pb-4 text-left font-mono text-[0.6875rem] font-normal tracking-widest text-muted-foreground uppercase"

function PricingTable() {
  return (
    <table className="w-full border-collapse text-left max-md:block">
      <caption className="sr-only">Sessions and starting prices</caption>
      <thead className="max-md:sr-only">
        <tr className="border-b">
          <th scope="col" className={heading}>
            Session
          </th>
          <th scope="col" className={heading}>
            Includes
          </th>
          <th scope="col" className={heading}>
            Time
          </th>
          <th scope="col" className={`${heading} text-right`}>
            From
          </th>
        </tr>
      </thead>
      <tbody className="max-md:block">
        {pricing.sessions.map((session) => (
          <tr
            key={session.name}
            className="border-b max-md:block max-md:py-6 max-md:first:border-t"
          >
            <th
              scope="row"
              className={`${cell} font-heading text-3xl font-normal md:w-1/4 md:text-4xl`}
            >
              {session.name}
            </th>
            <td className={`${cell} max-w-[44ch] text-muted-foreground`}>
              {session.includes}
            </td>
            <td className={`${cell} whitespace-nowrap text-muted-foreground`}>
              {session.time}
            </td>
            <td
              className={`${cell} font-heading text-3xl whitespace-nowrap max-md:pt-3 md:pr-0 md:text-right md:text-4xl`}
            >
              <span className="mr-2 font-mono text-[0.6875rem] tracking-widest text-muted-foreground uppercase md:hidden">
                From
              </span>
              {session.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { PricingTable }
