/* tslint:disable */
/* eslint-disable */
/**
 * Guess The Number API
 * API for Guess The Number game
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Score
 */
export interface Score {
    /**
     * My Score
     * @type {number}
     * @memberof Score
     */
    score?: number;
}

/**
 * Check if a given object implements the Score interface.
 */
export function instanceOfScore(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScoreFromJSON(json: any): Score {
    return ScoreFromJSONTyped(json, false);
}

export function ScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): Score {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'score': !exists(json, 'score') ? undefined : json['score'],
    };
}

export function ScoreToJSON(value?: Score | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'score': value.score,
    };
}

