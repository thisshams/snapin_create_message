import fetch from "node-fetch"
import { AutomationEvent, AutomationInterface, AutomationMetadata } from "../sdk"

const API_BASE = 'https://api.dev.devrev-eng.ai/';




export class App implements AutomationInterface {

	GetMetadata(): AutomationMetadata {
		return { name: "SnapIn E2E Demo App", version: "0.1" }
	}

	async Run(events: AutomationEvent[]) {
		console.log("Running SnapIn E2E Demo App - Work create on github branch create");
		await this.CreateMessage(events[0]);
	}

	async makeComment(method: string, data: object, authorization: string) {
		// const url = API_BASE + method;
		let url = "https://api.dev.devrev-eng.ai/works/don:DEV-1FGiBzra6:issue:38/comments"
		const resp = await fetch(url, {
			method: 'POST',
			headers: {
				authorization,
				"content-type": "application/json",
			},
			// body: JSON.stringify(data),
			body: JSON.stringify({
				"artifactIds": [], "body": "BOT message on issue"
			}),
		});
		return resp;
	}

	

	async CreateMessage(event: AutomationEvent) {
		let id=event.payload.work_created.work.id_v1
		// let method="works/"+id+"/comments"
		// let data={
		// 	"artifactIds": [], "body": "BOT message on issue"
		// }
		let authorization="eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXYuZGV2cmV2LWVuZy5haS8iLCJraWQiOiJzdHNfa2lkX3JzYSIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFGR2lCenJhNjpkZXZ1LzYiLCJleHAiOjE3NzI5NjE1NzcsImh0dHA6Ly9kZXZyZXYuYWkvYXV0aDBfdXNlcl9pZCI6Imdvb2dsZS1vYXV0aDJ8MTEwODQ3NTM3NTE3MDgyNzgzMjUxIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xRkdpQnpyYTYiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi0xRkdpQnpyYTYiLCJodHRwOi8vZGV2cmV2LmFpL2RldnVpZCI6IkRFVlUtNiIsImh0dHA6Ly9kZXZyZXYuYWkvZGlzcGxheW5hbWUiOiJpLXNoYW1zLWFuc2FyaSIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJpLXNoYW1zLmFuc2FyaUBkZXZyZXYuYWkiLCJodHRwOi8vZGV2cmV2LmFpL2Z1bGxuYW1lIjoiU2hhbXMgQW5zYXJpIiwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTY3ODM1MzU3NywiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldi5kZXZyZXYtZW5nLmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xRkdpQnpyYTY6dG9rZW4vWFljTkFhdE4iLCJvcmdfaWQiOiJvcmdfRTFNTzRLbFF3b2NGZWkxYSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xRkdpQnpyYTY6ZGV2dS82In0.YWs743Rq-6muAInNwUhEE6HZKfkvdU1Z1Lz3bEoyV6LqKbSDhHYqyRf60HvAD7P9FyyRc04iC0NALfoOjjbrE0ULQxGtsfaNSOyHJPjvfhjath14Q2hOFSHFTmYsFfa5WYV_M3TdU38-Gl6-d1Q3akFsZNTfHCY_GfocXd0ZpVHuI5VLrK4KVlVaEoZdPPGsyI8b9EaLMNT3G0ShgdIjN9I5_XaoQ8-4Rc35czaoCSq3Qopf1e3EZN85Bbc067ZKc1DS3gewqDEu1mQ3qyLPaaMUoGxMcBu7U5fTaJJN74L1uVGhjJtt6mZo8o7nB_dXXPlhQMdRMmfwENEVhR23Ww"
		// this.makeComment(method,data,authorization)
		let url = "https://api.dev.devrev-eng.ai/works/don:DEV-1FGiBzra6:issue:38/comments"
		const resp = await fetch(url, {
			method: 'POST',
			headers: {
				authorization,
				"content-type": "application/json",
			},
			// body: JSON.stringify(data),
			body: JSON.stringify({
				"artifactIds": [], "body": "BOT message on issue"
			}),
		});
	}
}
