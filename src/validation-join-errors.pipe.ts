import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import * as _ from 'lodash';

export class ValidationJoinErrorsPipe extends ValidationPipe {
    public createExceptionFactory() {
        return (validationErrors: ValidationError[] = []) => {
            if (this.isDetailedOutputDisabled) {
                return new HttpErrorByCode[this.errorHttpStatusCode]();
            }

            const errors: Record<string, string[]>[] = [];
            validationErrors.forEach(error => {
                errors.push({ [error.property]: _.values(error.constraints) });
            });

            return new HttpErrorByCode[this.errorHttpStatusCode](errors);
        };
    }
}
