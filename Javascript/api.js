/**
 * @api {get} /user/:id 유저 조회
 * @apiName user/:id
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription 유저 정보 조회
 * 
 * @apiHeader {String} Content-Type application/x-www-form-urlencoded
 * @apiHeader {String} Authorization Bearer QgOWdpaI-8612b337-6622-4870-ba3d-00fb11804d3e 
 * 
 * @apiParam {Number} :id user_id (필수)
 * 
 * @apiSuccess {Number} statusCode 결과
 * @apiSuccess {Boolean} err 에러 여부
 * @apiSuccess {Object} data data
 * @apiSuccess {Number} data.user_id user_id
 * @apiSuccess {String} message response message
 * 
 * @apiSuccessExample {json} Success-Response
{
    "statusCode": 200,
    "error": false,
    "data": {
        "room_id": user_id,
    },
    "message": "OK"
}
 */