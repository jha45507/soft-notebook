export const About = (props) => {
  return (
    <><div className='container'>
      <div className='my-3'>
        <h1> About Notes </h1>
      </div>
      <div className='my-2 '>
        <h3>What Is a Note?</h3>
        <p className='text-secondary fw-bold fst-italic'>A note is a legal document that serves as an IOU from a borrower to a creditor or an investor. Notes have similar features to bonds in which investors receive interest payments for holding the note and are repaid the original amount invested—called the principal—at a future date.
          Notes can obligate issuers to repay creditors the principal amount of a loan, in addition to any interest payments, at a predetermined date. Notes have various applications, including informal loan agreements between family members, safe-haven investments, and complicated debt instruments issued by corporations.</p>
      </div>
      <div className='my-2'>
        <h3>Understanding Notes</h3>
        <p className='text-secondary fw-bold fst-italic'>A note is a debt security obligating repayment of a loan, at a predetermined interest rate, within a defined time frame. Notes are similar to bonds but typically have an earlier maturity date than other debt securities, such as bonds. For example, a note might pay an interest rate of 2% per year and mature in one year or less. A bond might offer a higher rate of interest and mature several years from now. A debt security with a longer maturity date typically comes with a higher interest rate—all else being equal—since investors need to be compensated for tying up their money for a longer period.</p>
      </div>
      <div className='my-2'>
        <h3>Notes as Safe-Havens</h3>
        <p className='text-secondary fw-bold fst-italic'>Treasury notes, commonly referred to as T-notes, are financial securities issued by the U.S. government. Treasury notes are popular investments for their fixed income but are also viewed as safe-haven investments in times of economic and financial difficulties. T-notes are guaranteed and backed by the U.S. Treasury, meaning investors are guaranteed their principal investment.

          T-notes can be used to generate funds to pay down debts, undertake new projects, improve infrastructure, and benefit the overall economy. The notes, which are sold in $100 increments, pay interest in six-month intervals and pay investors the note's full face value upon maturity. Treasury notes are offered with maturity dates of two, three, five, seven, and 10 years. As a result, T-notes generally have longer terms than Treasury bills but shorter terms than Treasury bonds.</p>
      </div>
    </div>
    </>
  )
}
export default About;