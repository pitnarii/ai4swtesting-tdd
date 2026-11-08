class Timesheet {
  timesheets = new Map();
  entries = [];

  _normalizeProjectName(projectName) {
    if (typeof projectName !== 'string') {
      return null;
    }
    const trimmed = projectName.trim();
    return trimmed.length > 0 ? trimmed.toLowerCase() : null;
  }

  submitTimesheet(projectName, duration) {
    const normalizedKey = this._normalizeProjectName(projectName);
    if (!normalizedKey) {
      return false;
    }

    if (typeof duration === 'boolean') {
      return false;
    }

    const numericDuration = Number(duration);
    if (
      Number.isNaN(numericDuration) ||
      !Number.isFinite(numericDuration) ||
      numericDuration <= 0
    ) {
      return false;
    }

    const currentTotal = this.timesheets.get(normalizedKey) || 0;
    const newTotal = Math.round((currentTotal + numericDuration) * 100) / 100;

    this.timesheets.set(normalizedKey, newTotal);
    this.entries.push({
      projectName: projectName.trim(),
      duration: numericDuration,
    });

    return true;
  }

  getTimesheets() {
    return [...this.entries];
  }

  getTotalTimesheetHours(projectName) {
    const normalizedKey = this._normalizeProjectName(projectName);
    if (!normalizedKey) {
      return 0;
    }
    return this.timesheets.get(normalizedKey) ?? 0;
  }
}

module.exports = Timesheet;
