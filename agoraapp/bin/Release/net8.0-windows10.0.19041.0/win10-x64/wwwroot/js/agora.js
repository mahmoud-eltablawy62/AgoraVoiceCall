
// wwwroot/js/agora.js
let client;
let localAudioTrack;

async function initializeAgora(appId, channel, token, uid) {
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    await client.join(appId, channel, token, uid);
    localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await client.publish([localAudioTrack]);
}

async function leaveCall() {
    if (localAudioTrack) {
        localAudioTrack.close();
    }
    await client.leave();
}
