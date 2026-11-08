### questions
## ทำทันที

1. What happens when a user enters a time value that isn’t a half-hour multiple (e.g. 0.75 or 20 minutes)?
The text says time is tracked in half hour units, but doesn’t say whether other values are rejected, rounded up, rounded down, or rounded to the nearest unit. Without this, we can’t define the expected result for off-unit input.

2. Does “Only I should be able to see my tracked time” apply to everyone, including managers, admins, and payroll or reporting users?
The statement says only the user, but real timesheet systems often need managers or administrators to view time. If an exception exists, the requirement contradicts itself. If not, it conflicts with typical business use and needs confirming.

3. Is the half-hour unit applied consistently across entry, display, and history?
If a user enters 1.5 hours, we need to know whether it’s shown as “1.5”, “1h 30m”, or “3 units”. We also need to know whether the same format is used everywhere the data appears, so values don’t look different between screens.

4. How is the history of time spent per project calculated and displayed?
The “So that” clause mentions keeping a history of how much time was spent on each project. The features don’t say whether totals are shown, over what period (week, month, all time), or how edits and deletions are reflected in those totals.

5. Can a user edit or delete a time entry after completing a timesheet, and do the same rules apply as for new entries?
Features describe only creating entries. If edits are allowed, we need to know that the validation (half-hour units, required project and time) is applied identically, and that the history stays consistent afterwards.

## เก็บไว้ทีหลัง

1. What is the minimum and maximum amount of time that can be entered for a single entry and for a single day?
Nothing prevents someone from entering 0 hours, a negative value, or 30 hours in one day. We need boundaries to know what valid and invalid input look like.

2. How is “complete a timesheet” defined?
It’s unclear whether completing means submitting, saving, or finalizing. It’s also unclear what completion applies to: a single entry, a day, or a week. The requirement of “a project and amount of time” could be read as per entry or per timesheet.

3. Can the same project be entered more than once in a single day or timesheet, and how are those entries treated?
It’s unclear whether duplicate entries are combined into one total or kept as separate rows. This affects whether the history and totals stay consistent with what the user entered.
 

## ตัดทิ้ง

1. Where does the list of projects come from, and what makes a project valid?
We need to know whether users pick from a predefined list or can type a free-text name, and whether closed, archived, or unassigned projects can be selected. This affects whether we can verify that time is tracked against the correct project.

2. Who is “I” or “the user” when time is entered, for example when someone enters time on behalf of another person or uses a shared account?
The privacy rule and the “As a timesheet user” role assume a single clearly identified user. If delegation or shared access exists, the visibility rule and the attribution of time to a person may become inconsistent.