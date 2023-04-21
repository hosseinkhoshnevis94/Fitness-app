const testData = [
    {
        "bodyPart": "chest",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3313.gif",
        "id": "3313",
        "name": "weighted straight bar dip",
        "target": "pectorals"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3642.gif",
        "id": "3642",
        "name": "weighted stretch lunge",
        "target": "glutes"
    },
    {
        "bodyPart": "chest",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0856.gif",
        "id": "0856",
        "name": "weighted svend press",
        "target": "pectorals"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1754.gif",
        "id": "1754",
        "name": "weighted three bench dips",
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1755.gif",
        "id": "1755",
        "name": "weighted tricep dips",
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1767.gif",
        "id": "1767",
        "name": "weighted triceps dip on high parallel bars",
        "target": "triceps"
    },
    {
        "bodyPart": "waist",
        "equipment": "wheel roller",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0857.gif",
        "id": "0857",
        "name": "wheel rollerout",
        "target": "abs"
    },
    ,
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2135.gif",
        "id": "2135",
        "name": "weighted front plank",
        "target": "abs"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0834.gif",
        "id": "0834",
        "name": "weighted front raise",
        "target": "delts"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0866.gif",
        "id": "0866",
        "name": "weighted hanging leg-hip raise",
        "target": "abs"
    },
    {
        "bodyPart": "back",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0835.gif",
        "id": "0835",
        "name": "weighted hyperextension (on stability ball)",
        "target": "spine"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3641.gif",
        "id": "3641",
        "name": "weighted kneeling step with swing",
        "target": "delts"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3644.gif",
        "id": "3644",
        "name": "weighted lunge with swing",
        "target": "glutes"
    },
    {
        "bodyPart": "back",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3286.gif",
        "id": "3286",
        "name": "weighted muscle up",
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3312.gif",
        "id": "3312",
        "name": "weighted muscle up (on bar)",
        "target": "lats"
    },
    {
        "bodyPart": "back",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3290.gif",
        "id": "3290",
        "name": "weighted one hand pull up",
        "target": "lats"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0840.gif",
        "id": "0840",
        "name": "weighted overhead crunch (on stability ball)",
        "target": "abs"
    },
    {
        "bodyPart": "back",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0841.gif",
        "id": "0841",
        "name": "weighted pull-up",
        "target": "lats"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0844.gif",
        "id": "0844",
        "name": "weighted round arm",
        "target": "delts"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0846.gif",
        "id": "0846",
        "name": "weighted russian twist",
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0845.gif",
        "id": "0845",
        "name": "weighted russian twist (legs up)",
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2371.gif",
        "id": "2371",
        "name": "weighted russian twist v. 2",
        "target": "abs"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "medicine ball",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0847.gif",
        "id": "0847",
        "name": "weighted seated bicep curl  (on stability ball)",
        "target": "biceps"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0849.gif",
        "id": "0849",
        "name": "weighted seated twist (on stability ball)",
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0850.gif",
        "id": "0850",
        "name": "weighted side bend (on stability ball)",
        "target": "abs"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0851.gif",
        "id": "0851",
        "name": "weighted sissy squat",
        "target": "quads"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0852.gif",
        "id": "0852",
        "name": "weighted squat",
        "target": "glutes"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0853.gif",
        "id": "0853",
        "name": "weighted standing curl",
        "target": "biceps"
    },
    {
        "bodyPart": "lower arms",
        "equipment": "weighted",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0854.gif",
        "id": "0854",
        "name": "weighted standing hand squeeze",
        "target": "forearms"
    },
]
export default testData