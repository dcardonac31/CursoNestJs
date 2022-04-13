export class Response {
    readonly function:  string;
    readonly errorCode: number;
    readonly message:   string;
    readonly country:   string;
    readonly data:      Data[];
}

export class Data {
    downPayment:                number;
    assuranceValue:             number;
    interestRate:               number;
    frequency:                  number;
    fees:                       number;
    assuranceFeeValue:          number;
    assuranceTotalFeeValue:     number;
    lastPaymentDate:            Date;
    daysSinceLastPayment:       number;
    effectiveAnnualRate:        number;
    assurancePercentage:        number;
    monthlyArrearsRate:         number;
    asuranceBalance:            number;
    chargeValue:                number;
    hasArrearsCharge:           boolean;
    arrearsCharge:              number;
    previousInterest:           number;
    previousArrears:            number;
    currentEffectiveAnnualRate: number;
    currentInterestRate:        number;
    totalFeeValue:              number;
    updatedPaymentPlanValue:    number;
    arrearsFees:                number;
    arrearsPayment:             number;
    typeDocument:               string;
    idDocument:                 string;
    creditId:                   string;
    creditNumber:               number;
    storeId:                    string;
    createDate:                 Date;
    creditValue:                number;
    arrearsDays:                number;
    minimumPayment:             number;
    isNextFee:                  boolean;
    totalPayment:               number;
    feeValue:                   number;
    storeName:                  string;
    balance:                    number;
    dueDate:                    Date;
    updatedPaymentPlan:         boolean;
    maximumResidueValue:        number;
}