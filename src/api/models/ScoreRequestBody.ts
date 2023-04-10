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
 * @interface ScoreRequestBody
 */
export interface ScoreRequestBody {
    /**
     * The number of points scored by the player in the current round
     * @type {number}
     * @memberof ScoreRequestBody
     */
    point?: number;
    /**
     * The multiplier value used for calculating the player's score
     * @type {number}
     * @memberof ScoreRequestBody
     */
    multiplier?: number;
}

/**
 * Check if a given object implements the ScoreRequestBody interface.
 */
export function instanceOfScoreRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScoreRequestBodyFromJSON(json: any): ScoreRequestBody {
    return ScoreRequestBodyFromJSONTyped(json, false);
}

export function ScoreRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoreRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'point': !exists(json, 'point') ? undefined : json['point'],
        'multiplier': !exists(json, 'multiplier') ? undefined : json['multiplier'],
    };
}

export function ScoreRequestBodyToJSON(value?: ScoreRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'point': value.point,
        'multiplier': value.multiplier,
    };
}
