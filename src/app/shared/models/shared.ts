export interface Qualifications {
  error_code: number
  status_code: number
  data: QualificationsList
  errors: any[]
}

export interface Countries {
  error_code: number
  status_code: number
  data: CountriesList
  errors: any[]
}

export interface GraduationYears {
  error_code: number
  status_code: number
  data: GraduationYearsList
  errors: any[]
}

export interface Governorates {
  error_code: number
  status_code: number
  data: GovernoratesList
  errors: any[]
}

export interface Branches {
  error_code: number
  status_code: number
  data: BranchesList
  errors: any[]
}

export interface QualificationsList {
  list: QualificationsData[]
}

export interface CountriesList {
  list: CountriesData[]
}

export interface GraduationYearsList {
  list: GraduationsData[]
}

export interface GovernoratesList {
  list: GovernoratesData[]
}

export interface BranchesList {
  list: BranchesData[]
}

export interface QualificationsData {
  id: number
  name: string
}

export interface CountriesData {
  id: number
  name: string
  phone_code: number
}

export interface GraduationsData {
  key: number
  value: number
}

export interface GovernoratesData {
  id: number
  name: string
}

export interface BranchesData {
  branch_id: number
  branch_name: string
}